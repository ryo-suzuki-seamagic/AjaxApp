function memo() {
  const submit = document.getElementByLd("submit");
  submit.addEventListener("click",(e) =>{}){
    const formData = new ForemData(document.getElementById("form"));
  const XHR = new XHLHttprequest();
  XHR.open("POST","/posts",true);
  XHR.responseType = "json";
  XHR.send(formData);
  XHR.onload = () => {
    const item = XHR.response.post;
    const list = document.getElementById("list");
    const formText = document.getElementById("content");
    const HTML = `
    <div class"post data-id=${item.id}>
      <div class="post-data">
        投稿日時:${item.created_at}
      </div>
      <div class="post-content">
      ${item.content}
      </div>
    </div>`;
    list.insertAdjacentHTML("afterend", HTML);

    formText.value = "";

    if (XHR.status != 200) {
      alert(`Error ${XHR.status}: ${XHR.statusText}`);
    } eles {
      return null;
    }
  };
 })
}
window.addEventListener("Load", memo);