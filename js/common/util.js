define([],{

    //��ȡָ���Ĳ�ѯ�ַ���
    getQueryString:function(key){
        //ȥ���ַ�������ĸ����
        var search = location.search.slice(1);

        //ʹ��&���ŵõ�ÿһ��key=val
        var searchArr = search.split('&');
        var tempArr = null;
        var searchObj = {};

        //���������е�ÿһ��key=val�ַ�����ʹ��=������
        //Ȼ��һkeyΪ����valΪֵ��ӵ�searchObj������
        for(var i = 0;i<searchArr.length;i++){
            tempArr = searchArr[i].split('=');
            searchObj[tempArr[0]] = tempArr[1];
        }
        //�в�������ָ��ֵ��û�в�������ȫ��ֵ
        return arguments.length?searchObj[key]:searchObj;
    },
    extend:function(){}
});