// Post Box Functionality
const postBox = document.getElementById("postBox");
const charCount = document.getElementById("charCount");
const postButton = document.getElementById("postButton");
const feed = document.getElementById("feed");

postBox.addEventListener("input", () => {
  const remaining = 280 - postBox.value.length;
  charCount.textContent = remaining;

  if (remaining < 50) {
    charCount.classList.add("text-yellow-400");
    charCount.classList.remove("text-gray-500");
  } else if (remaining <= 0) {
    charCount.classList.add("text-red-500");
    charCount.classList.remove("text-yellow-400");
  } else {
    charCount.classList.remove("text-yellow-400", "text-red-500");
    charCount.classList.add("text-gray-500");
  }
});

postButton.addEventListener("click", () => {
  if (postBox.value.trim() === "" || postBox.value.length > 280) return;

  const postContent = postBox.value;
  const postElement = document.createElement("div");
  postElement.className =
    "post border-[1px] border-y-gray-600 border-x-0 fade-in";
  postElement.innerHTML = `
         <div class="post">
            <div class="flex">
              <div class="image m-4">
                <img class="w-16" src="https://placehold.co/50x50" alt="" />
              </div>
              <div class="content my-3">
                <span
                  class="font-bold hover:underline cursor-pointer text-white"
                  >Codepoint My Mirantes</span
                >
                <span class="text-gray-500">@visionDot · just now </span>
                <div>never Stop learning</div>
                <div class="postimg m-4 ml-0">
                 ${postContent}
                </div>
                <div
                  class="icons flex justify-between mx-4 my-4 text-sm text-gray-600"
                >
                  <div
                    class="icon flex items-center justify-center hover:text-pink-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer"
                  >
                    <span class="material-symbols-outlined"> Favorite </span> 1k
                  </div>
                  <div
                    class="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer"
                  >
                    <span class="material-symbols-outlined"> chat_bubble </span>
                    1k
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;

  feed.prepend(postElement);
  postBox.value = "";
  charCount.textContent = 280;
  charCount.classList.remove("text-yellow-400", "text-red-500");
  charCount.classList.add("text-gray-500");
});

function toggleLike(element) {
  const likeIcon = element.querySelector(".material-symbols-outlined");
  const likeCount = element.querySelector(".like-count");

  let count = parseInt(likeCount.innerText.replace("k", "000"));

  if (element.classList.contains("liked")) {
    element.classList.remove("liked");
    likeIcon.style.color = "gray";
    count -= 1;
  } else {
    element.classList.add("liked");
    likeIcon.style.color = "red";
    likeIcon.style.transform = "scale(1.5)";
    setTimeout(() => {
      likeIcon.style.transform = "scale(1)";
    }, 200);
    count += 1;
  }

  likeCount.innerText = count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count;
}

const likeButton = document.querySelector(".icon");

likeButton.addEventListener("click", toggleLike);
