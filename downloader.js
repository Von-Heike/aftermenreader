function pnp() {
	if(npag<10){
		return "000"+npag.toString();
	}else if(npag<100){
		return "00"+npag.toString();
	}else if(npag<1000){
		return "0"+npag.toString();
	}
}

function volta() {
	pagina = "https://ia801405.us.archive.org/BookReader/BookReaderImages.php?zip=/22/items/aftermanzoologyo0000dixo/aftermanzoologyo0000dixo_jp2.zip&file=aftermanzoologyo0000dixo_jp2/aftermanzoologyo0000dixo_"+pnp()+".jp2&scale=1&rotate=0"
	libro .setAttribute("src", pagina);
	npag++;
}
libro = document.getElementById("libro");
npag = 0000;

volta();