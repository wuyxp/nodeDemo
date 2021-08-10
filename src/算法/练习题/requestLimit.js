/*
写一个函数，支持最大限度的请求方法
*/
class RequestLimit {
  constructor(limit) {
    this.limit = Number(limit) || 2;
    this.blockQueue = [];
    this.currentReqNumber = 0;
  }
  
  async request(req) {
    if (!req) {
      console.log('error')
    }
    if (Object.prtotype.toString.call(req) !== '[object Function]') {
      console.log('error')
    }
    if (this.currentReqNumber >= this.limit) {
      await new Promise(resolve => this.blockQueue.push(resolve));
    }
    return this._handlerReq(req);
  }
  
  async _handlerReq(req) {
    this.currentReqNumber++;
    try {
      return await req();
    } catch (err) {
      return Promise.reject(err);
    } finally {
      this.currentReqNumber--;
      if(this.blockQueue.length) {
        this.blockQueue[0]();
        this.blockQueue.shift();
      }
    }
  }
}

//
const requestLimit = new ReqestLimit(2);
(async () => {
  for(let i =0; i<8; i++) {
    requestLimit.request(() =>fetch("http://www.baidu.com"));
  }
})()
