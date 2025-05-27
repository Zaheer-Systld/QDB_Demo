import {
  BarChartOutlined,
  BellOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
  FolderOpenOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import { Link } from "react-router-dom";
type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
  {
    key: "dashboard",
    label: "Dashboards",
    type: "group",
    children: [
      {
        key: "overview",
        icon: <BarChartOutlined />,
        label: <Link to='/dashboard'>Overview</Link>,
      },
      {
        key: "calendar",
        icon: <CalendarOutlined />,
        label: "Calendar",
      },
      {
        key: "schedule-actions",
        icon: <SendOutlined />,
        label: "Schedule Actions",
      },
      {
        key: "live-alerts",
        icon: <BellOutlined />,
        label: "Live Alerts",
      },
    ],
  },
  {
    key: "blogs",
    label: "Blogs",
    type: "group",
    children: [
      {
        key: "all",
        icon: <FileTextOutlined />,
        label: <Link to='/blogs'>All Blogs</Link>,
      },
      {
        key: "latest",
        icon: <ClockCircleOutlined />,
        label: "Latest",
      },
      {
        key: "archived",
        icon: <FolderOpenOutlined />,
        label: "Archived",
      },
    ],
  },
  {
    key: "docs",
    label: "DOCUMENTATION",
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
    ],
  },
  {
    key: "reports",
    label: "REPORTS",
    children: [
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
];

export default items;
