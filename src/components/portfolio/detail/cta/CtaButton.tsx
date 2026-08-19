const CtaButton = ({
  link,
  icon,
  text,
  btnType,
}: {
  link: string;
  icon: React.ReactNode;
  text: string;
  btnType: "btn-dark" | "btn-primary";
}) => {
  return (
    <a
      className={`${btnType} min-w-30 flex flex-col items-center justify-center gap-1`}
      href={link}
      target="_blank"
    >
      <div className="text-xl">{icon}</div>
      <span className="text-sm">{text}</span>
    </a>
  );
};

export default CtaButton;
