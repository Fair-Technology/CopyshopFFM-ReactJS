import { useTranslation } from "react-i18next";

const Heading = ({ text }: { text: string }) => {
  const { t } = useTranslation();

  return <div className="border-red-500 border-b-4 pb-1 text-lg  text-slate-600">{t(text)}</div>;
};

export default Heading;
