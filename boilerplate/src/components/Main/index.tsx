import * as S from './styles';

export default function Main() {
  return (
    <S.Wrapper>
      <S.Title>NextJS - Boilerplate</S.Title>
      <S.Description>
        ReactJS, NextJS, TypeScript, Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor sentado olhando para tela com códigos"
      />
    </S.Wrapper>
  );
}
