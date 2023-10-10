import pygame
from sys import exit

pygame.init()
Screen = pygame.display.set_mode((800, 400))
#pygame.display.display.set_caption('Mystic Maeves and the stolen futures')
clock = pygame.time.Clock()

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            exit()