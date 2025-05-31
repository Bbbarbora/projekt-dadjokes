import './style.css';
import { Joke } from '../../components/Joke/Joke';


export const HomePage = () => {
  return (
    <div className="container">
      <Joke
        userAvatar="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
        userName="Neroxx"
        text="The secret service isn't allowed to yell 'Get down!' anymore when the president is about to be attacked. Now they have to yell 'Donald, duck!'"
        likes={0}
        dislikes={0}
      />
    </div>
  );
};


