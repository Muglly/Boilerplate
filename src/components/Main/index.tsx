import * as S from './styles';

export default function Main() {
  return (
    <S.Wrapper>
      <S.Logo src="/img/nextjs-logo.svg" alt="Imagem escrito NextJS" />
      <S.Title>Next.js - Boilerplate</S.Title>
      <S.Description>
        React.js, Next.js, TypeScript, Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor sentado olhando para tela com códigos"
      />
    </S.Wrapper>
  );
}
