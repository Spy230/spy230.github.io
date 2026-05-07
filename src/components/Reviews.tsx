import { Star } from 'lucide-react';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: 'Дарья Лохова',
            text: 'Приезжала на ТО, и мне понравилось! Все проверили, сделали необходимые поправки и подробно объяснили каждый этап.',
            avatar: '👩',
            rating: 5,
            date: '15 декабря 2024'
        },
        {
            id: 2,
            name: 'Александр Сергеевич',
            text: 'За пару часов исправили то, что не смогли в другом сервисе. Показали, что именно было не так. Отличная работа!',
            avatar: '👨',
            rating: 5,
            date: '10 декабря 2024'
        },
        {
            id: 3,
            name: 'Мария Петрова',
            text: 'Очень довольна сервисом! Быстро диагностировали проблему с двигателем и качественно отремонтировали. Цены адекватные, персонал вежливый.',
            avatar: '👩',
            rating: 5,
            date: '5 декабря 2024'
        },
        {
            id: 4,
            name: 'Игорь Васильев',
            text: 'Обращался по поводу замены тормозных колодок. Работу выполнили быстро и качественно. Объяснили все нюансы, дали гарантию.',
            avatar: '👨',
            rating: 5,
            date: '28 ноября 2024'
        },
        {
            id: 5,
            name: 'Елена Смирнова',
            text: 'Отличный АвтоТехЦентр! Делали капитальный ремонт коробки передач. Все сроки соблюдены, качество на высоте. Рекомендую!',
            avatar: '👩',
            rating: 5,
            date: '20 ноября 2024'
        },
        {
            id: 6,
            name: 'Андрей Козлов',
            text: 'Профессиональный подход к делу. Быстро нашли причину странных звуков в подвеске и устранили проблему. Спасибо за качественную работу!',
            avatar: '👨',
            rating: 5,
            date: '15 ноября 2024'
        }
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                size={16}
                className={`${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
                    }`}
            />
        ));
    };

    return (
        <section id="reviews" className="py-20 bg-gray-800 relative" style={{
            backgroundImage: 'url(/images/works/Services%20600x800%20vol%204.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
        }}>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 via-gray-800/75 to-gray-800/80"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Отзывы наших клиентов
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Мы гордимся доверием наших клиентов и стремимся превосходить их ожидания
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-red-600 transition-colors bg-opacity-50"
                        >
                            <div className="flex items-start space-x-4 mb-4">
                                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-xl">
                                    {review.avatar}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="font-semibold text-white">{review.name}</h3>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="flex space-x-1">
                                            {renderStars(review.rating)}
                                        </div>
                                        <span className="text-gray-400 text-sm">{review.date}</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-300 leading-relaxed">{review.text}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://yandex.ru/maps/-/CLdTZNy5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold inline-block"
                    >
                        Оставить отзыв
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Reviews;