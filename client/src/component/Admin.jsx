import React from "react";
import UserRoleSelection from './UserSelectionRole.jsx' // Import the UserRoleSelection component here

const AdminPage = () => {
  const handleRoleSelect = (selectedRole) => {
    // Implement your logic to handle the selected user role
    // You can redirect to the appropriate user management page based on the role
    console.log(`Selected Role: ${selectedRole}`);
  };

  return (
    <div>
      {/* Render any other content specific to the admin page */}
      <h2>Admin Page</h2>
      <UserRoleSelection onRoleSelect={handleRoleSelect} />
    </div>
  );
};

export default AdminPage;