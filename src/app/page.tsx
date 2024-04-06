import Navbar from "@/components/Navbar";
import Dropdown from "@/components/Dropdown";

const Dropdownoptions = [
  {
    label: "option 0",
    value: "option 0",
  },
  {
    label: "option 1",
    value: "option 1",
  },
];

export default function DetailPage() {
  return (
    <main>
      <Navbar>
        <Dropdown options={Dropdownoptions} />
      </Navbar>
    </main>
  );
}
