function setError(e,msg){
    let parent = e.parentElement;
    let parentBox = parent.parentElement;
    let span = parentBox.qureySelector("span");
    span.innerHTML=msg;
    span.className="email_span";
}