import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Calendar } from '@/components/ui/calendar'
import { CalendarIcon, CheckIcon, ChevronRightIcon, InfoIcon, BellIcon, UserIcon } from 'lucide-react'

export default function ExamplePage() {
  const [date, setDate] = useState(new Date())
  const [checked, setChecked] = useState(false)
  const [switchChecked, setSwitchChecked] = useState(false)
  const [sliderValue, setSliderValue] = useState([50])
  const [selectValue, setSelectValue] = useState('')
  const [radioValue, setRadioValue] = useState('option1')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-2">Shadcn UI Components</h1>
        <p className="text-muted-foreground mb-10">Все компоненты shadcn/ui в одном месте</p>

        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Examples</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Separator className="mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Button Variants */}
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>Различные варианты кнопок</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </CardContent>
          </Card>

          {/* Input Fields */}
          <Card>
            <CardHeader>
              <CardTitle>Input Fields</CardTitle>
              <CardDescription>Текстовые поля ввода</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="example@mail.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Расскажите о себе..." />
              </div>
            </CardContent>
          </Card>

          {/* Form Controls */}
          <Card>
            <CardHeader>
              <CardTitle>Form Controls</CardTitle>
              <CardDescription>Checkbox, Switch, Radio</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" checked={checked} onCheckedChange={setChecked} />
                <Label htmlFor="terms">Принять условия</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="notifications" checked={switchChecked} onCheckedChange={setSwitchChecked} />
                <Label htmlFor="notifications">Уведомления</Label>
              </div>
              <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option1" id="option1" />
                  <Label htmlFor="option1">Опция 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option2" id="option2" />
                  <Label htmlFor="option2">Опция 2</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Select & Slider */}
          <Card>
            <CardHeader>
              <CardTitle>Select & Slider</CardTitle>
              <CardDescription>Выпадающий список и слайдер</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Выберите фрукт</Label>
                <Select value={selectValue} onValueChange={setSelectValue}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apple">Яблоко</SelectItem>
                    <SelectItem value="banana">Банан</SelectItem>
                    <SelectItem value="orange">Апельсин</SelectItem>
                    <SelectItem value="grape">Виноград</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Значение: {sliderValue[0]}%</Label>
                <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
              </div>
            </CardContent>
          </Card>

          {/* Progress & Skeleton */}
          <Card>
            <CardHeader>
              <CardTitle>Progress & Skeleton</CardTitle>
              <CardDescription>Индикаторы загрузки</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Загрузка...</Label>
                <Progress value={67} />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </CardContent>
          </Card>

          {/* Avatar & Badge */}
          <Card>
            <CardHeader>
              <CardTitle>Avatar & Badge</CardTitle>
              <CardDescription>Аватары и бейджи</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Alert */}
          <Card>
            <CardHeader>
              <CardTitle>Alerts</CardTitle>
              <CardDescription>Уведомления и предупреждения</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Информация</AlertTitle>
                <AlertDescription>Это информационное сообщение.</AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <BellIcon className="h-4 w-4" />
                <AlertTitle>Ошибка</AlertTitle>
                <AlertDescription>Произошла ошибка при выполнении.</AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Tooltip */}
          <Card>
            <CardHeader>
              <CardTitle>Tooltip</CardTitle>
              <CardDescription>Всплывающие подсказки</CardDescription>
            </CardHeader>
            <CardContent>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="inline-flex shrink-0 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input">
                    Наведи на меня
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Это всплывающая подсказка!</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardContent>
          </Card>

          {/* Dialog */}
          <Card>
            <CardHeader>
              <CardTitle>Dialog</CardTitle>
              <CardDescription>Модальные окна</CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger className="inline-flex shrink-0 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Открыть диалог
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Вы уверены?</DialogTitle>
                    <DialogDescription>
                      Это действие нельзя отменить. Продолжить?
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsOpen(false)}>Отмена</Button>
                    <Button onClick={() => setIsOpen(false)}>Продолжить</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Dropdown Menu */}
          <Card>
            <CardHeader>
              <CardTitle>Dropdown Menu</CardTitle>
              <CardDescription>Выпадающее меню</CardDescription>
            </CardHeader>
            <CardContent>
              <DropdownMenu>
                <DropdownMenuTrigger className="inline-flex shrink-0 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Открыть меню
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Меню</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Профиль</DropdownMenuItem>
                  <DropdownMenuItem>Настройки</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Выйти</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
          </Card>

          {/* Hover Card */}
          <Card>
            <CardHeader>
              <CardTitle>Hover Card</CardTitle>
              <CardDescription>Карточка при наведении</CardDescription>
            </CardHeader>
            <CardContent>
              <HoverCard>
                <HoverCardTrigger className="inline-flex shrink-0 items-center justify-center rounded-md text-sm font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  @shadcn
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@shadcn</h4>
                      <p className="text-sm">Основатель shadcn/ui</p>
                      <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                        <span className="text-xs text-muted-foreground">
                          Создано в январе 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </CardContent>
          </Card>

          {/* Popover */}
          <Card>
            <CardHeader>
              <CardTitle>Popover</CardTitle>
              <CardDescription>Всплывающее окно</CardDescription>
            </CardHeader>
            <CardContent>
              <Popover>
                <PopoverTrigger className="inline-flex shrink-0 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Открыть popover
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Настройки</h4>
                      <p className="text-sm text-muted-foreground">
                        Настройте параметры здесь.
                      </p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
              <CardDescription>Вкладки для переключения контента</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="account" className="w-full">
                <TabsList>
                  <TabsTrigger value="account">Аккаунт</TabsTrigger>
                  <TabsTrigger value="password">Пароль</TabsTrigger>
                  <TabsTrigger value="settings">Настройки</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="p-4">
                  <p className="text-muted-foreground">Настройки аккаунта</p>
                </TabsContent>
                <TabsContent value="password" className="p-4">
                  <p className="text-muted-foreground">Смена пароля</p>
                </TabsContent>
                <TabsContent value="settings" className="p-4">
                  <p className="text-muted-foreground">Общие настройки</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Accordion */}
          <Card>
            <CardHeader>
              <CardTitle>Accordion</CardTitle>
              <CardDescription>Раскрывающийся список</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Пункт 1</AccordionTrigger>
                  <AccordionContent>
                    Содержимое первого пункта. Здесь может быть любой текст.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Пункт 2</AccordionTrigger>
                  <AccordionContent>
                    Содержимое второго пункта. Еще немного информации.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Пункт 3</AccordionTrigger>
                  <AccordionContent>
                    Содержимое третьего пункта. Завершающая информация.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Table */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Table</CardTitle>
              <CardDescription>Таблица с данными</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Имя</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Роль</TableHead>
                    <TableHead className="text-right">Статус</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Иван Петров</TableCell>
                    <TableCell>ivan@example.com</TableCell>
                    <TableCell>Admin</TableCell>
                    <TableCell className="text-right"><Badge>Active</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Мария Иванова</TableCell>
                    <TableCell>maria@example.com</TableCell>
                    <TableCell>User</TableCell>
                    <TableCell className="text-right"><Badge variant="secondary">Pending</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Алексей Смирнов</TableCell>
                    <TableCell>alex@example.com</TableCell>
                    <TableCell>User</TableCell>
                    <TableCell className="text-right"><Badge>Active</Badge></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Scroll Area */}
          <Card>
            <CardHeader>
              <CardTitle>Scroll Area</CardTitle>
              <CardDescription>Область с прокруткой</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                {Array.from({ length: 20 }).map((_, i) => (
                  <p key={i} className="text-sm mb-2">Элемент списка {i + 1}</p>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Calendar */}
          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
              <CardDescription>Выбор даты</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          {/* Collapsible */}
          <Card>
            <CardHeader>
              <CardTitle>Collapsible</CardTitle>
              <CardDescription>Сворачиваемый контент</CardDescription>
            </CardHeader>
            <CardContent>
              <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger className="inline-flex shrink-0 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full justify-between">
                  <span>Нажмите чтобы развернуть</span>
                  <ChevronRightIcon className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 p-4 bg-muted rounded-md">
                  <p className="text-sm">Скрытый контент теперь виден!</p>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          {/* Resizable */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Resizable Panels</CardTitle>
              <CardDescription>Изменяемые панели</CardDescription>
            </CardHeader>
            <CardContent>
              <ResizablePanelGroup
                direction="horizontal"
                className="min-h-[200px] rounded-lg border"
              >
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Панель 1</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Панель 2</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </CardContent>
          </Card>

          {/* Navigation Menu */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Navigation Menu</CardTitle>
              <CardDescription>Главное меню навигации</CardDescription>
            </CardHeader>
            <CardContent>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Продукты</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                        <li>
                          <NavigationMenuLink href="#">
                            <div className="text-sm font-medium">Компоненты</div>
                            <p className="text-sm text-muted-foreground">Готовые UI компоненты</p>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink href="#">
                            <div className="text-sm font-medium">Шаблоны</div>
                            <p className="text-sm text-muted-foreground">Готовые макеты страниц</p>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Документация</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        <li>
                          <NavigationMenuLink href="#">
                            <div className="text-sm font-medium">Начало работы</div>
                            <p className="text-sm text-muted-foreground">Быстрый старт</p>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/about">
                      О нас
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </CardContent>
          </Card>

          {/* Pagination */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Pagination</CardTitle>
              <CardDescription>Постраничная навигация</CardDescription>
            </CardHeader>
            <CardContent>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-10" />

        <footer className="text-center text-muted-foreground">
          <p>Все компоненты shadcn/ui v{new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  )
}
