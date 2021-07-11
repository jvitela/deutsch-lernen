import { useEffect, useState } from "react";
import shuffle from "lodash/shuffle";

interface Option {
  id: number;
  isSelected: boolean;
  value: string;
}

const getOptions = (initialOptions: string[]) : Option[] => 
initialOptions.map(
  (value, idx): Option => ({
    id: idx,
    isSelected: false,
    value,
  })
)

export const useTogglesList = (initialOptions: string[]) => {
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [options, setOptions] = useState(() => getOptions(initialOptions));

  const update = (option: Option, isSelected: boolean) => {
    const updated = { ...option, isSelected };
    setOptions((options) =>
      options.map((current) =>
        current.id === updated.id ? updated : current
      )
    );
  };

  const select = (option: Option) => {
    if (option.isSelected) {
      return;
    }
    setSelectedIndexes((current) => current.concat(option.id));
    update(option, true);
  };

  const unselect = (option: Option) => {
    if (!option.isSelected) {
      return;
    }
    setSelectedIndexes((current) => current.filter((id) => id !== option.id));
    update(option, false);
  };

  useEffect(() => {
    setOptions(getOptions(shuffle(initialOptions)));
    setSelectedIndexes([]);
  }, [initialOptions])

  return {
    select,
    unselect,
    all: options,
    selected: selectedIndexes.map((idx) => options[idx]),
  };
};
