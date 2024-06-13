import { useState } from 'react'
import { Button, TextInput, List, MantineProvider, Group } from '@mantine/core'
import 'tailwindcss/tailwind.css';

 
export const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string>('');

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <MantineProvider>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Liste des Tâches</h1>
          <div className="flex mb-4">
            <TextInput
              className="flex-grow mr-2"
              value={task}
              onChange={(event) => setTask(event.currentTarget.value)}
              placeholder="Ajouter une tâche"
            />
            <Button onClick={addTask}>Ajouter</Button>
          </div>
          <List spacing="xs" size="sm" className="list-decimal pl-4">
            {tasks.map((task, index) => (
              <List.Item
                key={index}
                className="flex items-center justify-between"
              >
                <span>{task}</span>
                <Group>
                <Button color="red" size="xs" onClick={() => removeTask(index)}>
                  Supprimer
                </Button>
                </Group>
              </List.Item>
            ))}
          </List>
        </div>
      </div>
    </MantineProvider>
  );
}

