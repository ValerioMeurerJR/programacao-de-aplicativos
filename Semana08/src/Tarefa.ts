export default class Tarefa {
    constructor(text: string, id?: number, completed?: boolean) {
        this.id = id || Math.floor(Math.random() * 10000000);
        this.text = text;
        this.completed = completed || false;
    }
    
    private id: number;
    private text: string;
    private completed: boolean;


    public getCompleted(): boolean {
        return this.completed;
    }
    public getText(): string {
        return this.text;
    }
    public getId(): number {
        return this.id;
    } 
    public setId(id: number): void {
        this.id = id;
    }       
    public setCompleted(completed: boolean): void {
        this.completed = completed;
    }
    public setText(text: string): void {
        this.text = text;
    }
}
