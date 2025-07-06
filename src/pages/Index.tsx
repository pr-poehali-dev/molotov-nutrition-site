import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-molotov-black text-molotov-white">
      {/* Header */}
      <header className="bg-molotov-black border-b border-molotov-gray">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-display font-bold text-molotov-red">
                MOLOTOV
              </div>
              <div className="text-sm font-display text-molotov-gray">
                THE BEAST
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#courses"
                className="text-molotov-gray hover:text-molotov-red transition-colors"
              >
                Курсы
              </a>
              <a
                href="#training"
                className="text-molotov-gray hover:text-molotov-red transition-colors"
              >
                Тренировки
              </a>
              <a
                href="#consultation"
                className="text-molotov-gray hover:text-molotov-red transition-colors"
              >
                Консультация
              </a>
              <a
                href="#articles"
                className="text-molotov-gray hover:text-molotov-red transition-colors"
              >
                Статьи
              </a>
              <a
                href="#reviews"
                className="text-molotov-gray hover:text-molotov-red transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contacts"
                className="text-molotov-gray hover:text-molotov-red transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-molotov-red hover:bg-red-700 text-molotov-white">
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-molotov-black to-molotov-dark-gray">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-molotov-red text-molotov-white">
                Профессиональная поддержка 24/7
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 text-molotov-white">
                MOLOTOV
                <span className="block text-molotov-red">THE BEAST</span>
              </h1>
              <p className="text-xl mb-8 text-molotov-gray leading-relaxed">
                Профессиональные курсы стероидов, персональные тренировки и
                консультации по спортивной фармакологии с медицинским
                сопровождением
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-molotov-red hover:bg-red-700 text-molotov-white px-8 py-3"
                >
                  <Icon name="Zap" className="mr-2" size={20} />
                  Бесплатная консультация
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-molotov-gray text-molotov-gray hover:bg-molotov-gray hover:text-molotov-black px-8 py-3"
                >
                  <Icon name="PlayCircle" className="mr-2" size={20} />
                  Смотреть презентацию
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-molotov-red/20 rounded-lg blur-3xl"></div>
              <img
                src="/img/1778d335-27bc-42af-be41-6b253002c8cb.jpg"
                alt="Профессиональный атлет"
                className="relative z-10 w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="courses" className="py-20 bg-molotov-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4 text-molotov-white">
              Наши услуги
            </h2>
            <p className="text-xl text-molotov-gray">
              Профессиональный подход к достижению ваших целей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-molotov-dark-gray border-molotov-gray hover:border-molotov-red transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-molotov-red rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Pill" className="text-molotov-white" size={24} />
                </div>
                <CardTitle className="text-molotov-white">
                  Курсы стероидов
                </CardTitle>
                <CardDescription className="text-molotov-gray">
                  Индивидуальные программы с медицинским контролем
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-molotov-gray">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-molotov-red mr-2"
                      size={16}
                    />
                    Персональная дозировка
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-molotov-red mr-2"
                      size={16}
                    />
                    Медицинское сопровождение
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-molotov-red mr-2"
                      size={16}
                    />
                    Контроль безопасности
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-molotov-dark-gray border-molotov-gray hover:border-molotov-red transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-molotov-red rounded-lg flex items-center justify-center mb-4">
                  <Icon
                    name="Dumbbell"
                    className="text-molotov-white"
                    size={24}
                  />
                </div>
                <CardTitle className="text-molotov-white">
                  Персональные тренировки
                </CardTitle>
                <CardDescription className="text-molotov-gray">
                  Индивидуальные программы тренировок и питания
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-molotov-gray">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-molotov-red mr-2"
                      size={16}
                    />
                    Программы тренировок
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-molotov-red mr-2"
                      size={16}
                    />
                    Планы питания
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-molotov-red mr-2"
                      size={16}
                    />
                    Онлайн поддержка
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-molotov-dark-gray border-molotov-gray hover:border-molotov-red transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-molotov-red rounded-lg flex items-center justify-center mb-4">
                  <Icon
                    name="MessageCircle"
                    className="text-molotov-white"
                    size={24}
                  />
                </div>
                <CardTitle className="text-molotov-white">
                  Консультации
                </CardTitle>
                <CardDescription className="text-molotov-gray">
                  Экспертные консультации по фармакологии
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-molotov-gray">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-molotov-red mr-2"
                      size={16}
                    />
                    Бесплатная первичная консультация
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-molotov-red mr-2"
                      size={16}
                    />
                    Поддержка 24/7
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-molotov-red mr-2"
                      size={16}
                    />
                    Сертификаты качества
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-molotov-red to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6 text-molotov-white">
            Готовы начать трансформацию?
          </h2>
          <p className="text-xl mb-8 text-molotov-white/90 max-w-2xl mx-auto">
            Получите бесплатную консультацию и индивидуальный план достижения
            ваших целей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-molotov-white text-molotov-red hover:bg-gray-100 px-8 py-3"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Записаться на консультацию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-molotov-white text-molotov-white hover:bg-molotov-white hover:text-molotov-red px-8 py-3"
            >
              <Icon name="MessageSquare" className="mr-2" size={20} />
              Написать в Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-molotov-black border-t border-molotov-gray py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl font-display font-bold text-molotov-red">
                  MOLOTOV
                </div>
                <div className="text-sm font-display text-molotov-gray">
                  THE BEAST
                </div>
              </div>
              <p className="text-molotov-gray">
                Профессиональная поддержка в достижении ваших спортивных целей
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-molotov-white">Услуги</h4>
              <ul className="space-y-2 text-molotov-gray">
                <li>
                  <a href="#" className="hover:text-molotov-red">
                    Курсы стероидов
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-molotov-red">
                    Тренировки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-molotov-red">
                    Консультации
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-molotov-red">
                    Программы питания
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-molotov-white">
                Поддержка
              </h4>
              <ul className="space-y-2 text-molotov-gray">
                <li>
                  <a href="#" className="hover:text-molotov-red">
                    Статьи
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-molotov-red">
                    Отзывы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-molotov-red">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-molotov-red">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-molotov-white">
                Контакты
              </h4>
              <div className="space-y-2 text-molotov-gray">
                <div className="flex items-center">
                  <Icon name="Phone" className="mr-2" size={16} />
                  +7 (XXX) XXX-XX-XX
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="mr-2" size={16} />
                  info@molotov.ru
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="mr-2" size={16} />
                  Москва, Россия
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-molotov-gray mt-8 pt-8 text-center text-molotov-gray">
            <p>&copy; 2024 MOLOTOV - THE BEAST. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
