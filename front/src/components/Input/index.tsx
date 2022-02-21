import {
  FC,
  InputHTMLAttributes,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { useField } from '@unform/core';
import { FiHelpCircle, FiEye, FiEyeOff } from 'react-icons/fi';

import { ErrorMessage } from '../ErrorMessage';

import {
  InputContainer,
  LabelContainer,
  Tooltip,
  TooltipText,
  InputWrapper,
} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  tooltip?: string;
}

const Input: FC<InputProps> = ({
  type = 'text',
  name,
  label,
  tooltip,
  ...props
}) => {
  const [isShowingContent, setIsShowingContent] = useState(false);
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  const toggleShowContent = useCallback(() => {
    setIsShowingContent(!isShowingContent);
  }, [isShowingContent]);

  return (
    <InputContainer>
      <LabelContainer htmlFor={fieldName}>
        <p>{label}</p>

        {tooltip ? (
          <Tooltip>
            <FiHelpCircle />
            <TooltipText>{tooltip}</TooltipText>
          </Tooltip>
        ) : null}
      </LabelContainer>

      <InputWrapper>
        <input
          type={isShowingContent ? 'text' : type}
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          {...props}
        />
        {type === 'password' ? (
          <button type="button" onClick={toggleShowContent}>
            {isShowingContent ? <FiEye /> : <FiEyeOff />}
          </button>
        ) : null}

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputWrapper>
    </InputContainer>
  );
};

export { Input };
