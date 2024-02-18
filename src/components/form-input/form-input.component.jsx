import { FormInputLabel, Group, Input } from "./form-input.style";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
      <Input {...otherProps} />
    </Group>
  );
};
export default FormInput;
