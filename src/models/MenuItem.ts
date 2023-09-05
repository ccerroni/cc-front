export interface MenuItem {
  name: string;
  url: string;
  component?: React.ReactElement;
  children?: MenuItem[];
}