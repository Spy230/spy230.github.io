@echo off
echo 🔨 Сборка проекта...
call npm run build

echo 📦 Подготовка к деплою...
cd dist
git init
git add -A
git commit -m "Deploy: %date% %time%"
git branch -M main

echo 🚀 Отправка на GitHub Pages...
git push -f https://github.com/Spy230/spy230.github.io.git main:gh-pages

cd ..
echo ✅ Деплой завершен! Сайт доступен по адресу: https://spy230.github.io
pause