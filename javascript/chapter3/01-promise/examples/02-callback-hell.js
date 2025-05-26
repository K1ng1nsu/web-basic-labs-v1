// [콜백 지옥 예제]
function getUser(id, callback) {
  setTimeout(() => callback(null, { id, name: "Kim JS" }), 500);
}
function getPostsByUser(user, callback) {
  setTimeout(
    () => callback(null, [`${user.name}의 게시글1`, `${user.name}의 게시글2`]),
    500
  );
}
function getCommentsByPost(post, callback) {
  setTimeout(() => callback(null, [`${post}에 댓글1`, `${post}에 댓글2`]), 500);
}

// 중첩되는 콜백 지옥 구조
getUser(1, (err, user) => {
  if (err) return console.error(err);
  getPostsByUser(user, (err, posts) => {
    if (err) return console.error(err);
    getCommentsByPost(posts[0], (err, comments) => {
      if (err) return console.error(err);
      console.log("콜백 지옥 결과:", comments);
    });
  });
});
