import React from 'react';
import queryString from 'query-string';

const Login = ({location, match}) => {
  const query = queryString.parse(location.search);
  console.log(query);

  if (query.isLogin === 'true') {
    return (
      <div>
        <h2>Login</h2>
        <p>{match.params.name} 님 환영합니다</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Login</h2>
        <p>로그인 해주세요</p>
      </div>
    );
  }


};

export default Login;