import { useLayoutEffect, useRef, useState } from "react";

interface Props {
  title: string;
}

const TitleInput = (props: Props) => {
  const { title } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(title.trim() !== "" ? title : "Untitled");
  const [rollbackValue] = useState(title.trim() !== "" ? title : "Untitled");
  const [isEditMode, setIsEditMode] = useState(false);

  function toggleEditMode() {
    if (isEditMode) {
      setIsEditMode(false);
    } else {
      setIsEditMode(true);
    }
  }

  function handleBlur() {
    toggleEditMode();
    if (value.trim() === "") setValue(rollbackValue);
  }

  useLayoutEffect(() => {
    if (isEditMode) {
      ref.current?.focus();
      ref.current?.select();
    }
  }, [isEditMode]);

  return (
    <>
      {!isEditMode && (
        <span
          onClick={toggleEditMode}
          className="font-semibold text-lg focus:outline-0 w-full overflow-ellipsis"
        >
          {value}
        </span>
      )}

      {isEditMode && (
        <input
          ref={ref}
          onBlur={handleBlur}
          className="font-semibold text-lg focus:outline-0 w-full overflow-ellipsis"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      )}
    </>
  );
};

export default TitleInput;
