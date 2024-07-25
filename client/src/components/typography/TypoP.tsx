function TypographyP(props: any) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{props.text}</p>;
}

export default TypographyP;
