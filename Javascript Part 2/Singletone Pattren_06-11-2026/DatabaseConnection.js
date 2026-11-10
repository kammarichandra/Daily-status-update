
class DatabaseConnection {

    constructor() {

        // Check whether an instance already exists
        
        if (DatabaseConnection.instance) {
            return DatabaseConnection.instance;
        }

        // Connection status

        this.isConnected = false;

        // Store the single instance

        DatabaseConnection.instance = this;
    }

    // Connect to Database

    connect() {

        if (this.isConnected) {
            return "Database is already connected!";
        }

        this.isConnected = true;

        return "Database connected successfully!";
    }

    // Disconnect from Database

    disconnect() {

        if (!this.isConnected) {
            return "Database is already disconnected!";
        }

        this.isConnected = false;

        return "Database disconnected successfully!";
    }

    // Get Connection Status

    getStatus() {
        return this.isConnected ? "Connected" : "Disconnected";
    }
}

// Export Singleton Class

export default DatabaseConnection;
