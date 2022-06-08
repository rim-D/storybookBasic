// story에 글로벌하게 적용될 포맷셋팅

// controls
// 개발자가 코드를 수정하지 않아도 storybook에서 동적으로 인터렉션 가능
export const parameters = {
  // Global하게 argType에 on으로 시작하는 이벤트 핸들러 함수들을
  // 모두 허용하는 정규식을 적어주면, Action 탭에서 이벤트가 발생하는 것을 감지할 수 있음
  actions: { argTypesRegex: "^on[A-Z].*" },
  // 해당 데이터타입을 가진 속성을 만났을 때 정규표현식을 통해 데이터타입에 따라
  // storybook은 적적하게 테스팅할 수 있도록 매칭 해줌
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}