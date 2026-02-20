interface SocialIconProps {
  label: string;
  color: string;
}

const SocialIcon = ({ label, color }: SocialIconProps) => (
  <div className={`w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[13px] font-bold text-white transition-all duration-300 cursor-pointer ${color} hover:border-transparent hover:scale-110`}>
    {label}
  </div>
);

export default SocialIcon;