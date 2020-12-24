import { NextPage } from 'next';

interface PlanModalProps {
  show: boolean
  text: string
  closeModal: (val: any) => void
}

const PlanModal: NextPage<PlanModalProps> = ({ show, text, closeModal }) => {
  console.log(show);
  const showHideClassName = show ? '' : 'hidden'

  return (
    <div className={`${showHideClassName} flex fixed-full text-center bg-black bg-opacity-60`}>
      {/* Outside click handler */}
      <div className="fixed-full" onClick={closeModal} />
      <div className="flex z-20 flex-col rounded mx-auto mt-40 mb-auto bg-white w-2/5">
        {/* Modal header */}
        <div className="flex justify-end align-center rounded-t w-full bg-secondary h-7">
          <a className="text-gray-400 text-2xl font-bold mr-2 cursor-pointer" onClick={closeModal}>×</a>
        </div>

        <div className="p-5">
          <p className="text-black text-left">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default PlanModal