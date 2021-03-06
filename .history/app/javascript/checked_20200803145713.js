function check() {
  const posts = document.getElementsByClassName("post");
  postsA = Array.from(posts);

  postsA.forEach(function (post) {
    if (post.getAttribute("data-load", "true") != null){
      return null;
    }
    post.setAttribute("data-Load", "true");
    post.addEventListener("click", (e) => {
    const postId = post.getAttribute("data-id");
    const XHR = new XMLHttpRequest();
    XHR.open("GET", `/posts/${postId}`, true);
    XHR.responseType = "json";
    XHR.send();
    XHR.onload = () => {
      const item = XHR.response.post;
    if (item.checked === true) {
      post.setAttribute("data-check", "true");
    } else if (item.checked === false) {
      post.removeAttribute("data-check");
    }
    if (XHR.status != 200) {
      alert(`Error ${XHR.status}: ${XHR.statusText}`);
    }else{
    return nill;
    }
  }
  XHR.oneror = () => {
    alert("Request failed");
  };

   e.prevenDefault();
    });
  });
}

setInterval(check, 1000);
window.addEventListener("load", check);
