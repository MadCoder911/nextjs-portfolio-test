type CardProps = {
  icon: any;
  title: string;
  text: string;
};
export const SkillsCard = ({ icon, title, text }: CardProps) => {
  return (
    <article>
      <span className="h-16 w-16 text-emerald-500">{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  );
};
