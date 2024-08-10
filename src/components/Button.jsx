const Button = ({ btnName, style, Operation }) => {
  return (
    <>
      <button className={`${style}`} onClick={() => Operation()}>
        {btnName}
      </button>
    </>
  );
};
export default Button;
