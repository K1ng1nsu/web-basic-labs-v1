/*
[문제] fetch로 댓글(comment)을 생성하는 POST 요청을 작성하세요.

POST: https://jsonplaceholder.typicode.com/comments

- 전송할 데이터: { postId: 1, name: "Tester", body: "Good post!", email: "test@example.com" }
- 응답 데이터 콘솔 출력
*/

const main = async (params) => {
  const resopnse = await fetch(
    'https://jsonplaceholder.typicode.com/comments',
    {
      method: 'POST',
      body: {
        postId: 1,
        name: 'Tester',
        body: 'Good post!',
        email: 'test@example.com',
      },
    }
  );

  console.log(await resopnse.json());
};

main();
