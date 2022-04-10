export interface SelectProps {
  /** 默认选中的选项 可以是字符串或者字符串数组 */
  defaultValue?: string | string[];
  placeholder?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否支持多选 */
  multiple?: boolean;
  /** input 的 name 属性 */
  name?: string;
  /** 选中值发生变化时触发 */
  onChange?: (selectedValue: string, selectedValues: string[]) => void;
  /** 下拉框出现/隐藏时触发 */
  onVisibleChange?: (visible: boolean) => void;
}
export interface SelectOptionProps {
  index?: string;
  /** 默认根据此属性值进行筛选，该值不能相同 */
  value: string;
  /** 选项的标签，若不设置则默认与 value 相同 */
  label?: string;
  /** 是否禁用该选项 */
  disabled?: boolean;
}
