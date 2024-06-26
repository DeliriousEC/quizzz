import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';

export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'ПТЭ-1. Что ПТЭ метрополитена в г. Москве устанавливают и определяют: (п.1)',
            2: 'ПТЭ-2. Уполномоченным работником перевозчика, управляющим приборами сигнализации, централизации и блокировки, открытием и закрытием сигналов светофоров (кроме автоматически действующих) на станциях линий, не оборудованных диспетчерской централизацией, в пределах одной станции или электродепо является: (п.4)',
            3: 'ПТЭ-3. Уполномоченным работником перевозчика, управляющим приборами сигнализации, централизации и блокировки, открытием и закрытием сигналов светофоров (кроме автоматически действующих) на станциях линий, оборудованных диспетчерской централизацией, при диспетчерском управлении электрической централизацией стрелок и сигналов является: (п.4)',
            4: 'ПТЭ-4. При основном средстве сигнализации АЛС-АРС, что является резервным средством сигнализации? (п.8)',
            5: 'ПТЭ-5. При основном средстве сигнализации АЛС-АРС и резервном средстве сигнализации - автоблокировке без защитных участков и автостопов, сигналы светофоров автоматического действия в нормальном состоянии: (п.8)',
            6: 'ПТЭ-6. При основном средстве сигнализации АЛС-АРС и резервном средстве сигнализации - автоблокировке без защитных участков и автостопов сигналы входных и выходных светофоров полуавтоматического действия должны быть: (п.8)',
            7: 'ПТЭ-7. Путевой автостоп - это: (п.8)',
            8: 'ПТЭ-8. Величина тормозного пути при экстренном торможении подвижного состава на открытых наземных участках увеличивается на: (п.8)',
            9: 'ПТЭ-9. На линиях, на которых основным средством сигнализации при движении поездов является АЛС-АРС, оборудованных дублирующим автономным устройством АЛС-АРС, при неисправности поездных устройств АЛС-АРС и дублирующего автономного',
            10: 'ПТЭ-10. Если показание АЛС-АРС превышает скорость, разрешённую сигналом светофора, то: (п.11)',
            11: 'ПТЭ-11. При каком сигнальном показании АЛС-АРС в кабине управления машинист обязан остановить подвижной состав на перегоне, подождать 30 сек и доложить ДЦХ ? (п.13,53)',
            12: 'ПТЭ-12. Для пропуска первого поезда по линии после ночных работ предусмотрено увеличенное время хода на: (п.17)',
            13: 'ПТЭ-13. В каком случае допускается отправиться поезду в неправильном направлении? (п.19)',
            14: 'ПТЭ-14. Возвращение подвижного состава с перегона на станцию осуществляется после: (п.20)',
            15: 'ПТЭ-15. При двухстороннем движении в неправильном направлении движение осуществляется: (п. 24)',
            16: 'ПТЭ-16. Отправление подвижного состава в неправильном направлении со станции, ограничивающей закрытый для двухстороннего движения участок, на станцию временного оборота, где путь приёма на станцию ограждается со стороны правильного направления светофором автоматического действия, осуществляется: (п. 25)',
            17: 'ПТЭ-17. В каком случае назначается вспомогательный подвижной состав? (п. 26)',
            18: 'ПТЭ-18. Может ли быть назначен вспомогательный подвижной состав в неправильном направлении? (п.26)',
            19: 'ПТЭ-19. Какие сигналы машинист подаёт при следовании по участку с ограниченной видимостью? (п. 27)',
            20: 'ПТЭ-20. Если видимость сигналов светофоров и пути не превышает 10 м, с какой скоростью будет следовать подвижной состав, отправляемый на участок до прекращения движения? (п.28)',
            21: 'ПТЭ-21. При затоплении пути ниже уровня головки рельса скорость подвижного состава на наземном участке пути должна быть: (п.29)',
            22: 'ПТЭ-22. На линии, где АЛС-АРС является основным средством сигнализации, при неисправности двух и более смежных рельсовых цепей (0 или ОЧ), при исправности составов и рельсов и свободности пути, требуется ли включение светофоров автоблокировки? (п. 30)',
            23: 'ПТЭ-23. При отправлении поезда со станции на перегон, на котором прекращено действие автоблокировки, между поездами соблюдается интервал: (п.31)',
            24: 'ПТЭ-24. На парковых путях с нецентрализованными стрелками основными средствами передачи указаний о выполнении маневровых передвижений служат: (п.33)',
            25: 'ПТЭ-25. Маневровые передвижения с обеих сторон на один и тот же путь производятся: (п. 34)',
        },
        answers: {
            1: {
                1: 'устанавливают порядок движения подвижного состава и организации маневровой работы, функционирования объектов инфраструктуры метрополитена в городе Москве, систему сигналов, относящихся к движению подвижного состава и организации маневровой работы, типы сигнальных приборов, при помощи которых эти сигналы подаются, определяют действия работников юридических лиц и индивидуальных предпринимателей, осуществляющих перевозку пассажиров метрополитеном в городе Москве, при технической эксплуатации метрополитена в городе Москве',
                2: 'устанавливают действия работников, юридических лиц и индивидуальных предпринимателей, осуществляющих перевозку пассажиров метрополитеном в городе Москве, при технической эксплуатации метрополитена в городе Москве, определяют действия руководителей подразделений метрополитена и оперативного персонала метрополитена, осуществляющих перевозку пассажиров метрополитена в г. Москве',
                3: 'устанавливают порядок движения подвижного состава, организацию маневровой работы, действия работников юридических лиц и индивидуальных предпринимателей, осуществляющих перевозку пассажиров метрополитеном в городе Москве, определяют действия физических лиц, предпринимателей и оперативного персонала метрополитена, осуществляющих перевозку пассажиров метрополитена в г. Москве',
                4:'устанавливают функционирование объектов инфраструктуры, систему сигналов и типы сигнальных приборов, определяют порядок движения подвижного состава, организацию маневровой работы, функционирование объектов инфраструктуры, систему сигналов и типы сигнальных приборов',
            },
            2: {
                1: 'дежурный по станции',
                2: 'дежурный поста централизации',
                3: 'поездной диспетчер',
                4: 'дежурный по Метрополитену'
            },
            3: {
                1: 'поездной диспетчер',
                2: 'начальник станции',
                3: 'начальник дистанции',
                4: 'дежурный по Метрополитену'
            },
            4: {
                1: 'автоблокировка с автостопами и защитными участками',
                2: 'автоблокировка без защитных участков, но с автостопами',
                3: 'автоблокировка с защитными участками без автостопов',
                4: 'автоблокировка без защитных участков и автостопов'
            },
            5: {
                1: 'выключены',
                2: 'включены и имеют разрешающее показание "зелёный"',
                3: 'включены и имеют разрешающее показание "синий"',
                4: 'выключены, но при задании маршрута следования уполномоченным работником перевозчика, управляющим открытием и закрытием сигналов на станциях линии, открываются на разрешающее показание'
            },
            6: {
                1: 'постоянно отключёнными',
                2: 'постоянно включёнными и иметь два режима работы: при отключённой и включённой автоблокировке',
                3: 'включёнными только при отключённой автоблокировке',
                4: 'включёнными только при включённой автоблокировке'
            },
            7: {
                1: 'устройство, приводящее в действие систему экстренного торможения поезда в случае проезда светофора с запрещающим показанием',
                2: 'устройство, приводящее в действие систему экстренного торможения поезда при увеличении установленной скорости на парковых путях',
                3: 'устройство, приводящее в действие систему экстренного торможения поезда при увеличении установленной скорости на станционных путях',
                4: 'неподвижная скоба, установленная на станционных путях'
            },
            8: {
                1: '25%',
                2: '30%',
                3: '50%',
                4: '70%'
            },
            9: {
                1: 'по разрешающим показаниям светофоров автоблокировки со скоростью не более 45 км/ч при следовании по главным путям перегонов и не более 35 км/ч при следовании по станциям',
                2: 'по разрешающим показаниям светофоров автоблокировки со скоростью не более 25 км/ч при следовании по главным путям перегонов и не более 15 км/ч при следовании по станциям',
                3: 'по разрешающим показаниям светофоров автоблокировки со скоростью не более 35 км/ч при следовании по главным путям перегонов и не более 25 км/ч при следовании по станциям',
                4: 'по разрешающим показаниям светофоров автоблокировки со скоростью не более 15 км/ч при следовании по главным путям перегонов и не более 5 км/ч при следовании по станциям',
            },
            10: {
                1: 'следовать необходимо по показаниям АЛС-АРС',
                2: 'остановиться и доложить ДЦХ, далее следовать его указаниям',
                3: 'снизить скорость до 20 км/ч',
                4: 'выполняется требование сигнала светофора',
            },
            11: {
                1: '"0"',
                2: '"ОЧ"',
                3: '20',
                4: 'переменное показание 0/"ОЧ"',
            },
            12: {
                1: 'на 2-3 минуты',
                2: 'не более 3 минут',
                3: 'не менее, чем на 2 минуты',
                4: 'не менее, чем на 1 минуту',
            },
            13: {
                1: 'в случае невозможности отправить поезд в правильном направлении в течение более 1 часа',
                2: 'в случае невозможности отправить поезд в правильном направлении в течение более 2 часов',
                3: 'в случае невозможности отправить поезд в правильном направлении в течение более 30 минут',
                4: 'в случае невозможности отправить поезд в правильном направлении в течение более 15 минут',
            },
            14: {
                1: 'остановки вслед идущего поезда со стороны правильного направления',
                2: 'закрытия пути перегона (участка), на котором следует подвижной состав, а также пути приёма на станцию назначения',
                3: 'выдачи письменного разрешения поездного диспетчера',
                4: 'дачи указания ДЦХ без закрытия пути, с предупреждением об остановке впереди идущего поезда',
            },
            15: {
                1: 'по приказу поездного диспетчера со скоростью не более 35 км/ч, если нет других ограничений скорости',
                2: 'по разрешению поездного диспетчера со скоростью не более 25 км/ч при управлении машинистом',
                3: 'по разрешению дежурного поста централизации со скоростью не более 35 км/ч',
                4: 'по распоряжению поездного диспетчера со скоростью не более 20 км/ч',
            },
            16: {
                1: 'по ручному сигналу дежурной по станции после закрытия участка пути, где будет следовать поезд и остановки встречного поезда, следующего в правильном направлении, у переносного сигнала остановки на станции, смежной со станцией временного оборота',
                2: 'по распоряжению дежурного поста централизации после остановки встречного поезда, следующего в правильном направлении, у переносного сигнала остановки на станции, смежной со станцией временного оборота',
                3: 'по приказу поездного диспетчера после закрытия перегона, прилегающего к станции временного оборота, со стороны правильного направления',
                4: 'остановки на станции, смежной со станцией временного оборота',
            },
            17: {
                1: 'при невозможности приведения поезда в движение и невозможности устранения неисправности в течение 5 минут',
                2: 'при невозможности приведения поезда в движение и невозможности устранения неисправности в течение 30 минут',
                3: 'при невозможности приведения поезда в движение и невозможности устранения неисправности в течение 45 минут',
                4: 'при невозможности приведения поезда в движение и невозможности устранения неисправности в течение 1 часа',
            },
            18: {
                1: 'да, в любом случае',
                2: 'да, но только после высадки пассажиров на станции',
                3: 'нет, может назначаться только в правильном направлении',
                4: 'нет, это длительный процесс',
            },
            19: {
                1: 'оповестительные сигналы с периодичностью не менее двух сигналов в минуту',
                2: 'сигналы общей тревоги не менее двух сигналов в минуту',
                3: 'аварийные сигналы не менее трёх сигналов в минуту',
                4: 'аварийно-оповестительный сигнал в течение одной минуты',
            },
            20: {
                1: 'не более 10 км/ч',
                2: 'не более 20 км/ч',
                3: 'не более 25 км/ч',
                4: 'не более 45 км/ч',
            },
            21: {
                1: 'не более 35 км/ч',
                2: 'не более 20 км/ч',
                3: 'не более 25 км/ч',
                4: 'не более 10 км/ч',
            },
            22: {
                1: 'да, поезда следуют по показаниям светофоров автоматического действия',
                2: 'нет, включение светофоров автоблокировки не производится',
                3: 'светофоры автоблокировки включаются только на участке с неисправными рельсовыми цепями',
                4: 'на таких линиях светофоры автоблокировки отсутствует',
            },
        },
        correctAnswers: {
            1: '1',
            2: '2',
            3: '1',
            4: '4',
            5: '1',
            6: '2',
            7: '1',
            8: '3',
            9: '1',
            10: '4',
            11: '1',
            12: '3',
            13: '1',
            14: '2',
            15: '1',
            16: '4',
            17: '1',
            18: '2',
            19: '1',
            20: '1',
            21: '2',
            22: '2',
            23: '',
            24: '',
            25: '',

        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="Content">
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Дальше</button>
                    </>) : (
                    <div className="finalPage">
                    <h1>Поздравляю!</h1>
                    <p>Верных ответов: {score} из {Object.keys(quiestions).length}</p>
                </div>
                    )
                }
            </div>
        );
    }
}