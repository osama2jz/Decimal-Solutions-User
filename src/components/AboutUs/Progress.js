import { RingProgress, Text } from "@mantine/core";

const Progress = () => {
  return (
    <div className="flex md:flex-row flex-col space-y-5 justify-evenly items-center bg-slate-50 p-8 mt-16">
      <div className="flex flex-col">
        <RingProgress
          sections={[{ value: 100, color: "#A4238C" }]}
          label={
            <Text color="#A4238C" weight={700} align="center" size="xl">
              100%
            </Text>
          }
        />
        <p className="w-[120px] text-center font-poppins">
          Website Developement
        </p>
      </div>
      <div className="flex flex-col">
        <RingProgress
          sections={[{ value: 85, color: "#A4238C" }]}
          label={
            <Text color="#A4238C" weight={700} align="center" size="xl">
              85%
            </Text>
          }
        />
        <p className="w-[120px] text-center font-poppins">
          Mobile App Developement
        </p>
      </div>
      <div className="flex flex-col">
        <RingProgress
          sections={[{ value: 70, color: "#A4238C" }]}
          label={
            <Text color="#A4238C" weight={700} align="center" size="xl">
              70%
            </Text>
          }
        />
        <p className="w-[120px] text-center font-poppins">
          AR/VR Games
        </p>
      </div>
      <div className="flex flex-col">
        <RingProgress
          sections={[{ value: 75, color: "#A4238C" }]}
          label={
            <Text color="#A4238C" weight={700} align="center" size="xl">
              75%
            </Text>
          }
        />
        <p className="w-[120px] text-center font-poppins">
          UI/UX Design
        </p>
      </div>
      <div className="flex flex-col">
        <RingProgress
          sections={[{ value: 85, color: "#A4238C" }]}
          label={
            <Text color="#A4238C" weight={700} align="center" size="xl">
              85%
            </Text>
          }
        />
        <p className="w-[120px] text-center font-poppins">
          Digital Marketing
        </p>
      </div>
      <div className="flex flex-col">
        <RingProgress
          sections={[{ value: 90, color: "#A4238C" }]}
          label={
            <Text color="#A4238C" weight={700} align="center" size="xl">
              90%
            </Text>
          }
        />
        <p className="w-[120px] text-center font-poppins">
          ERP
        </p>
      </div>
    </div>
  );
};
export default Progress;
