const Dashboard: React.FC = () => {
  const handleRunScript = async () => {
    try {
      const response = await axios.post("/run-script");
      if (response.status === 200) {
        console.log("Script executed successfully.");
        // Add any additional actions you want to perform after the script execution here
      } else {
        console.error("An error occurred while running the script.");
      }
    } catch (error) {
      console.error("An error occurred while calling the API:", error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleRunScript}>Run Bash Script</button>
    </div>
  );
};

export default Dashboard;
