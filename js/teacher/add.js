define(['jquery', 'common', 'nprogress','util','template','datepicker','datepickerLanguage'],
	function($, undefined, nprogress,util,template,datepicker,undefined) {

	// ��ҳ���е�js������ϣ�������������
	nprogress.done();

	/*
	* ��ȡtc_id��ѯ�ַ��������������Ϊ��ǰ�ǽ�ʦ�༭ҳ�棬û������Ϊ���½�ʦ���ҳ��
	*
	* �༭��ʦ��
	* 1���Ȼ�ȡ��ʦ��Ϣ��չʾ������
	* 2�������ύ���¼���תΪajax��ʽ�ύ����ʦ�޸Ľӿ�
	*
	* ��ӽ�ʦ��
	* 1�������ύ���¼���תΪajax��ʽ�ύ����ʦ��ӽӿ�
	* */

	//���ݱ༭����ӣ���Ӧ����Ⱦ��
	var tcId = util.getQueryString('tc_id');
	if(tcId){
		//��ȡ�ý�ʦ֮ǰ����Ϣ����䵽����
		$.get('/v6/teacher/edit',{ tc_id: tcId },function(data){
			if(data.code == 200) {
				var html = template('teacher-form-tpl', data.result);
				$('.teacher-add').html(html);
				$('#datepicter').datepicker({
					language: 'zh-CN',
					endDate:new Date(),
					format:'yyyy-mm-dd'
				});
			}
		});
	}
	//������ӽ�ʦ��صĲ���
	else{
		var html = template('teacher-form-tpl',{});
		$('.teacher-add').html(html);
		$('#datepicter').datepicker({
			language:'zh-CN',
			endDate:new Date(),
			format:'yyyy-mm-dd'
		});
	}
	/*
	* �������ύ�¼���ת��Ϊajax����
	* ����Ǳ༭����ô����/v6/teacher/update,������Ҫһ��tc_id����
	* �������ӣ���ô����/v6/teacher/add
	* */
	$( '.teacher-add' ).on('submit','#teacher-add-form',function(){
		$.ajax({
			url:'/v6/teacher/'+(tcId? 'update': 'add'),
			type:'post',
			data:$(this).serialize() + (tcId? '&tc_id=' + tcId : ''),
			success:function(data){
				if(data.code == 200){
					location.href = '/html/teacher/list.html';
				}
			}
		});
		return false;
	});
});
