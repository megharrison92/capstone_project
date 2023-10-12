import pygame
from sys import exit
from random import randint

def display_score():
    current_time = int(pygame.time.get_ticks() / 100) - start_time
    score_surface = text_font.render(f'Score:{ current_time }', False, 'White')
    score_container = score_surface.get_rect(center = (400, 50))
    Screen.blit(score_surface, score_container)
    return current_time

def obstacle_movement( obstacle_list ):
    if obstacle_list:
        for obstacle_container in obstacle_list:
            obstacle_container.x -= 5

            if obstacle_container.bottom == 325:
                Screen.blit(tarot_surface, obstacle_container)
            else:
                Screen.blit(bat_surface, obstacle_container)
        obstacle_list = [obstacle for obstacle in obstacle_list if obstacle.x > -100]
        
        return obstacle_list
    else:
        return []

def collisions( player, obstacles ):
    if obstacles:
        for obstacle_container in obstacles:
            if player.colliderect( obstacle_container ):
                return False
    return True 

pygame.init()
Screen = pygame.display.set_mode((800, 400))
pygame.display.set_caption('Mystic Maeve and the stolen futures')
clock = pygame.time.Clock()
text_font = pygame.font.Font('graphics/Pixeltype.ttf', 50)
game_active = False
start_time = 0
score = 0

background_surface = pygame.image.load('graphics/background.png').convert_alpha()
ground_surface = pygame.image.load('graphics/ground.png').convert_alpha()

# score_surface = text_font.render('Score', False, 'White')
# score_container = score_surface.get_rect(center = (400, 50))

#player 
player_walk_1 = pygame.image.load('graphics/player_walk_1.png').convert_alpha()
player_container = player_walk_1.get_rect( topleft = (80, 225))
player_gravity = 0

#intro screen
crystal_ball = pygame.image.load('graphics/crystal_ball.png').convert_alpha()
crystal_ball_container = crystal_ball.get_rect(center = (400, 200))

game_name = text_font.render('Mystic Maeve and the stolen futures', False, 'White')
game_name_container = game_name.get_rect(center = (400, 68))

game_message = text_font.render('Press space to run', False, 'White')
game_message_container = game_message.get_rect(center = (400, 333))

#obstacles
tarot_surface = pygame.image.load('graphics/tarot_1.png').convert_alpha()
bat_surface = pygame.image.load('graphics/bat_1.png').convert_alpha()

obstacle_container_list = []

#timer
obstacle_timer = pygame.USEREVENT + 1
pygame.time.set_timer(obstacle_timer, 1500)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            exit()
    
        if game_active:
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_SPACE and player_container.bottom >= 333:
                    player_gravity = -20
        else:
            if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
                game_active = True
                
                start_time = int(pygame.time.get_ticks() / 100)
    
        if event.type == obstacle_timer and game_active:
            if randint(0, 2):
                obstacle_container_list.append(tarot_surface.get_rect( bottomleft = ( randint(900, 1100), 325)))
            else:
                obstacle_container_list.append(bat_surface.get_rect( bottomleft = ( randint(900, 1100), 210)))

    if game_active:
        Screen.blit(background_surface, (0,0))
        Screen.blit(ground_surface, (0,0))
        score = display_score()


        #player
        #this moves it to the left!
        #player_container.left +=  1
        player_gravity += 1
        player_container.y += player_gravity
        if player_container.bottom >= 333:
            player_container.bottom = 333
        Screen.blit(player_walk_1, player_container)

        #obstacle movement
        obstacle_container_list = obstacle_movement(obstacle_container_list)

        #collision
        game_active = collisions( player_container, obstacle_container_list)

    
    else:
        Screen.fill((26, 30, 147))
        Screen.blit(crystal_ball, crystal_ball_container)
        obstacle_container_list.clear()
        player_container.midbottom = (80, 333)
        player_gravity = 0

        score_message = text_font.render(f'Your score:{ score }', False, 'White')
        score_message_container = score_message.get_rect(center = (400, 333))
        Screen.blit(game_name, game_name_container)

        if score == 0:
            Screen.blit(game_message, game_message_container)
        else:
            Screen.blit(score_message, score_message_container)
    
    pygame.display.update()
    clock.tick(60)