import { RingProgress, Text } from "@mantine/core";

const Progress = () => {
  return (
    <div className="flex md:flex-row flex-col space-y-5 justify-evenly items-center bg-slate-50 p-8 mt-16">
      <div className="flex flex-col">
        <RingProgress
          sections={[{ value: 40, color: "#A4238C" }]}
          label={
            <Text color="#A4238C" weight={700} align="center" size="xl">
              40%
            </Text>
          }
        />
        <p className="w-[120px] text-center font-poppins">
          Mobile App Developement
        </p>
      </div>
      <div className="flex flex-col">
        <RingProgress
          sections={[{ value: 50, color: "#A4238C" }]}
          label={
            <Text color="#A4238C" weight={700} align="center" size="xl">
              50%
            </Text>
          }
        />
        <p className="w-[120px] text-center font-poppins">
          Mobile App Developement
        </p>
      </div>
      <div className="flex flex-col">
        <RingProgress
          sections={[{ value: 60, color: "#A4238C" }]}
          label={
            <Text color="#A4238C" weight={700} align="center" size="xl">
              60%
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
          Mobile App Developement
        </p>
      </div>
      <div className="flex flex-col">
        <RingProgress
          sections={[{ value: 80, color: "#A4238C" }]}
          label={
            <Text color="#A4238C" weight={700} align="center" size="xl">
              80%
            </Text>
          }
        />
        <p className="w-[120px] text-center font-poppins">
          Mobile App Developement
        </p>
      </div>
    </div>
  );
};
export default Progress;
