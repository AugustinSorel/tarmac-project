import {
  LoaderContainer,
  LoaderElement,
  LoaderTitle,
  LoaderWrapper,
} from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderContainer>
        <LoaderElement
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        ></LoaderElement>
        <LoaderElement
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
        ></LoaderElement>
      </LoaderContainer>
      <LoaderTitle>Fetching the flights....</LoaderTitle>
    </LoaderWrapper>
  );
};

export default Loader;
