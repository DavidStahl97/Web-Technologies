$(function(){
	var br = $('<div/>');
	br.append($('<div/>',{text:'Brazil'}));
	br.append($('<img/>',{src:'br.gif'}));
	$('body').append(br);

	var fr = $('<div/>');
	fr.append($('<div/>',{text:'France'}));
	fr.append($('<img/>',{src:'fr.gif'}));
	$('body').append(fr);
	var gr = $('<div/>');
	gr.append($('<div/>',{text:'Greece'}));
	gr.append($('<img/>',{src:'gr.gif'}));
	$('body').append(gr);

	
	$('img').css('border','solid 3px gray');
	$('img').css('width',200);
	$('div div').css('text-align','center');
	$('body').css('font-family','arial');
	$('body').css('font-size','x-large');
	$('body>div').css({
	  margin:'1ex',border:'2px black solid',
	  padding:'24px',width:'206px',
	  display:'inline-block'
	});
});
