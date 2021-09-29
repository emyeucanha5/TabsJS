 // const btns = document.querySelectorAll('.tab-btn');
 // const contents = document.querySelectorAll('.content');
 // btns.forEach(function(btn) {
 // 	btn.addEventListener('click', function(e) {
 //  		const topic = btn.innerHTML.toLowerCase();
 //  		btns.forEach(function(btn) {
 //  			if(btn.classList.contains("active")){
 // 				btn.classList.remove("active");
 // 			}
 //  		});
 // 		contents.forEach(function(content) {
 // 			if(content.classList.contains("active")){
 // 				content.classList.remove("active");
 // 			}
 // 		});
 // 		btn.classList.add('active');
	// 	ctt = document.querySelector(`#${topic}`);
	// 	ctt.classList.add('active');
 // 	});
 // });
window.addEventListener('DOMContent', function(e) {
	
});
const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');
about.addEventListener('click', function(e) {
 const id = e.target.dataset.id;
	if(id){
		btns.forEach(function(btn) {
			btn.classList.remove('active');
		});
		e.target.classList.add('active');
		articles.forEach(function(article) {
			article.classList.remove('active');
		});
		const content = document.querySelector(`#${id}`);
		content.classList.add('active');
	}
});



/*btns.forEach(function(btn) {
			btn.classList.remove("active");
		});
		this.classList.add("active");
		articles.forEach(function(article) {
			article.classList.remove("active");
		});
		const element = document.querySelector(`#${id}`);
		element.classList.add('active');*/