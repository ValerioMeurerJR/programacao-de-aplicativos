import { contextBridge, ipcRenderer } from "electron";
import Veiculo from "./entity/Veiculo";

contextBridge.exposeInMainWorld('bancoAPI', {
    createVeiculo: async (veiculo: Veiculo) => await ipcRenderer.invoke('create', veiculo),
    findAllVeiculo: async () => await ipcRenderer.invoke('findAll'),
    findByIdVeiculo: async (id: string) => await ipcRenderer.invoke('findById', id)
})