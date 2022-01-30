export const PORT = 8080;
export const environment = {
    development: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: 'mongodb+srv://enryleinhard:rfaaIsQk0Faixhgz@cluster0.5ytvc.mongodb.net/TWRK?retryWrites=true&w=majority'
    },
    production: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: 'mongodb+srv://enryleinhard:rfaaIsQk0Faixhgz@cluster0.5ytvc.mongodb.net/TWRK?retryWrites=true&w=majority'
    }
}
