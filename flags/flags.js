var clist = [
	["br","Brazil"],
	["fr","France"],
	["gr","Greece"],
	["za","South Africa"]
  ];
  
  $(function(){
	createOne();
  })

  function createOne(){
	var i = Math.floor(clist.length*Math.random());
	var code = clist[i][0];
	var name = clist[i][1];

	var qu = $('<div id="qu"/>');
	qu.append($('<div/>',{text:name,id:'ans'}));
	qu.append($('<img/>',{src: 'flags/' + code+'.gif'}));

	qu.append($('<input/>',{id:'response', onkeyup:'onKeyUp()'}));

	$('body').append(qu);
  }

 function onKeyUp(){
	console.log('test');  
    if($('#response').val()==$('#ans').text()){
	  alert("Well Done");
    }
  }

