export const LandingFooterSection = (): JSX.Element => {
  return (
    <footer className="w-full border-t border-[#1f2226]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-start justify-between gap-4 px-6 py-10 text-sm font-normal leading-[1.5] text-[#8b9199] sm:flex-row sm:items-center sm:px-10">
        <span className="font-['Archivo',Helvetica] text-lg font-semibold text-[#54f4fc]">
          Iron
        </span>
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
};
