import { Spin } from "antd";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
      <Spin size="large" />
    </div>
  );
}
