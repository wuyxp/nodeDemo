function isAnagram(s1,s2){
    s1 = s1.split('').sort().join();
    s2 = s2.split('').sort().join();
    console.log (s1 == s2 || s1.indexOf(s2) != '-1' || s2.indexOf(s1) != '-1')
}
isAnagram('something', 'omtsngie');
isAnagram('aaa', 'aa');
isAnagram('aab', 'bba');
isAnagram('aab', 'aba')
